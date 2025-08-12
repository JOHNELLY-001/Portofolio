<template>
  <div class="form">
    <form @submit.prevent="uploadFile" enctype="multipart/form-data">

      <div class="content">
        <select v-model="category" required>
            <option disabled value="">Choose Category</option>
            <option value="home">Home</option>
        </select>

        <div v-if="category === 'home'">
            <input 
            type="text"
            v-model="form.name"
            placeholder="name"
            required
            class="input-style"/>
            <input type="file" @change="handleFile" required class="input-style"/>
        </div>
      </div>
                  <br>
            <button type="submit" class="button">Upload</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      category: '',
      media: null,
      form: {
        name: ''
      }
    };
  },
  methods: {
    handleFile(e) {
      this.media = e.target.files[0];
    },
    async uploadFile() {
      if (!this.category || !this.media) {
        alert("All fields required");
        return;
      }

      const formData = new FormData();

      // Append form fields
      for (const key in this.form) {
        if (this.form[key]) {
          formData.append(key, this.form[key]);
        }
      }

      formData.append('media', this.media);

      try {
        const endpoint = `http://localhost:3000/api/${this.category}/upload`; 
        await axios.post(endpoint, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Upload successfully');

        // Reset form
        this.form = { name: '' };
        this.media = null;
      } catch (error) {
        console.error(error);
        alert('Upload failed');
      }
    }
  }
};
</script>

<style scoped>
.form{
    /* background:fixed; */
    
}

.button{
  background-color: rgb(86, 206, 6);
  border-radius: 30%;
  font-size: 1.2rem;
  color: white;
}

.content{
  /* padding-top: 10%;
  padding-bottom: 10%; */
}
</style>