<template>
  <q-page class="q-pa-lg">
    <q-list separator bordered>
      <q-item
        v-for="(task, key) in tasks"
        :key="key"
        @click="task.completed = !task.completed"
        :class="task.completed ? 'bg-teal-12' : 'bg-orange-1'"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="task.completed ? 'text-strike' : null">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column justify-center">
              <q-item-label class="row justify-end" caption>
                Due Date: {{ task.dueDate }}
              </q-item-label>
              <q-item-label class="row justify-end" caption>
                <small>Complete by Time: {{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
};
</script>

<style></style>
