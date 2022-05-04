<template>
  <v-app>

  <v-tabs>
    <v-tab>SYSTEM EVENTS</v-tab>
    <v-tab>FAULT EVENTS</v-tab>
  </v-tabs>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Date
          </th>
           <th class="text-left">
            Note
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.note }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </v-app>
</template>

<script>
export default {
  components: {},

  data: () => ({
          drawer: false,
          items: [
          { title: 'INFO', icon: 'mdi-view-dashboard' },
          { title: 'RELAY', icon: 'mdi-view-dashboard' },
          { title: 'ALARM', icon: 'mdi-view-dashboard' },
          { title: 'SETTING', icon: 'mdi-view-dashboard' },
          { title: 'EVENT', icon: 'mdi-view-dashboard' },
          { title: 'MEASURE', icon: 'mdi-view-dashboard' },
        ],
         desserts: [
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
          {
            name: '',
            calories: '',
            note: '',
          },
        ],
        right: null,
    //
  }),



};
</script>
