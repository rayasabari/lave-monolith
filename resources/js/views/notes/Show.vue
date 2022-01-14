<template>
  <div class="container">
    <h1>{{note.title}}</h1>
    <div class="card">
      <div class="card-header">
        <span class="text-muted">{{note.published}}</span> -
        <strong>{{note.subject}}</strong>
      </div>
      <div class="card-body">
        <p>{{ note.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {
        title: "",
        slug: "",
        subject: "",
        description: "",
        published: "",
      },
    };
  },
  mounted() {
    this.getNote(this.$route.params.noteSlug);
  },
  methods: {
    async getNote(slug) {
      try {
        let response = await axios.get(`/api/notes/${slug}`);
        if (response.status === 200) {
          this.note = response.data.data;
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