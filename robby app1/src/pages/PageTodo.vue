<template>
  <q-page class="q-pa-lg">

    <q-list bordered>

      
      <q-item  
        v-for ="task in tasks"
        :key = "task.id"
        @click="task.completed = !task.completed"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
        </q-item-section>
      </q-item>

  </q-list>
    
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      tasks: [
      { 
        id:1,
        name: "Go Shopping",
        completed: false
      },
      { 
        id:2,
        name: "Walk The Dog",
        completed: false
      },
      { 
        id:3,
        name: "Practice Coding",
        completed: false
      },


    ]
    }

  }

};
</script>

<style></style>
