<template>
  <q-page class="q-pa-lg">

    <q-list 
      separator
      bordered>

      
      <q-item  
        v-for ="task in tasks"
        :key = "task.id"
        @click="task.completed = !task.completed"
        class="bg-teal-12"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{task.name}}</q-item-label>
        </q-item-section>

         <q-item-section side>
           <div class="row">
            <div class="column">
           <q-icon 
           name="event"
           size="18px"
           class="q-mr-xs"
            />
            </div>
            <div class="column justify-center">
          <q-item-label 
            class="row justify-end"
            caption>
            Due Date: {{task.dueDate}}
            </q-item-label>
             <q-item-label 
             class="row justify-end"
             caption>
            <small>Complete by Time: {{task.dueTime}}</small>
            
            </q-item-label>
            </div>
            </div>
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
        completed: false,
        dueDate:'2022/05/22',
        dueTime: "8:30 AM"
      },
      { 
        id:2,
        name: "Walk The Dog",
        completed: false,
        dueDate:'2022/05/23',
        dueTime: "8:45 PM"
      },
      { 
        id:3,
        name: "Practice Coding",
        completed: false,
        dueDate:'2022/05/24',
        dueTime: "12:30 PM"
      },


    ]
    }

  }

};
</script>

<style></style>
