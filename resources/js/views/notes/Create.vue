<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <form @submit.prevent="store">
            <div class="card-header">New Note</div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label" for="title">Title</label>
                <input type="text" id="title" v-model="form.title" class="form-control" />
                <div v-if="theerrors.title" class="text-danger mt-2">{{ theerrors.title[0] }}</div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="subject">Subject</label>
                <select class="form-control" id="subject" v-model="form.subject">
                  <option
                    v-for="subject in subjects"
                    :key="subject.id"
                    :value="subject.id"
                  >{{ subject.name }}</option>
                </select>
                <div v-if="theerrors.subject" class="text-danger mt-2">{{ theerrors.subject[0] }}</div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  class="form-control"
                  v-model="form.description"
                ></textarea>
                <div v-if="theerrors.description" class="text-danger mt-2">{{ theerrors.description[0] }}</div>
              </div>
            </div>
            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notiflix from 'notiflix';
export default {
  data() {
    return {
      form: {
        title: "",
        subject: "",
        description: "",
      },
      subjects: [],
      theerrors: [],
    };
  },
  mounted() {
    this.getSubjects();
  },
  methods: {
    async getSubjects() {
      try {
        let response = await axios.get("/api/subjects");
        if (response.status === 200) {
          this.subjects = response.data;
          console.log(response.data);
        }
      } catch (error) {
        console.log("Something's wrong");
      }
    },

    async store() {
      try {
        let response = await axios.post(
          "/api/notes/create-new-note",
          this.form
        );
        if (response.status === 200) {
          this.form = {
            title: "",
            subject: "",
            description: "",
          };
          this.theerrors = [];
          Notiflix.Report.success('Sucess',response.data.message, 'Okay');
        }
      } catch (error) {
        this.theerrors = error.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>