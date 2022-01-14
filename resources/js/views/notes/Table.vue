<template>
  <div class="container">
    <h3>Notes Index</h3>
    <div class="card">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="note in notes" :key="note.id">
            <td>
              <router-link :to="{name: 'notes.show', params: {noteSlug: note.slug}}">{{note.title}}</router-link>
            </td>
            <td>{{note.subject}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
    };
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
      try {
        let response = await axios.get("/api/notes");
        if (response.status === 200) {
          this.notes = response.data.data;
          console.log(response.data);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style>
</style>