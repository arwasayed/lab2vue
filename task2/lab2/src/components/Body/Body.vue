<template>
  <div>
   
    
    <div v-if="showForm" class="modal">
      <div class="modal-content">
        <h3>Add New Student</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Name:</label>
            <input v-model="newStudent.name" required class="form-control">
          </div>
          <div class="form-group">
            <label>City:</label>
            <input v-model="newStudent.city" required class="form-control">
          </div>
          <div class="buttons mt-3">
            <button type="submit" class="btn btn-success me-2">Add</button>
            <button @click="cancelForm" class="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Students Table -->
    <table class="table table-hover  table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="std in students" :key="std.id">
          <td>{{ std.id }}</td>
          <td>{{ std.name }}</td>
          <td>{{ std.city }}</td>
        </tr>
      </tbody>
    </table>

       <div class="mb-4">
      <button @click="showForm = true" class="btn btn-primary">
        Add Student
      </button>
      <span class="badge bg-secondary ms-2">
        Total Students: {{ students.length }}
      </span>
    </div>
  </div>
</template>

<script>
import Student from "../../Student.js"

export default {
  data() {
    return {
      students: [...Student], // Create a copy of the original array
      showForm: false,
      newStudent: {
        id: null,
        name: '',
        city: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Generate new ID
      const maxId = Math.max(...this.students.map(std => std.id), 0)
      this.newStudent.id = maxId + 1
      
      // Add new student
      this.students.push({...this.newStudent})
      
      // Reset form
      this.cancelForm()
    },
    cancelForm() {
      this.newStudent = { id: null, name: '', city: '' }
      this.showForm = false
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.badge {
  font-size: 1rem;
  padding: 8px 12px;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}
</style>