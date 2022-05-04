<template>
  <v-app>
    <v-app-bar app color="primary" elevation="4" rounded>
  <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-container fluid>
          <v-row justify="center" align="center">
              <v-app-bar-title>ETU-25-GE</v-app-bar-title>
          </v-row>
      </v-container>

      <v-spacer></v-spacer>

      <v-btn value="recent">
        <v-icon>mdi-upload</v-icon>
      </v-btn>

<v-btn value="download">
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            ETU-25-GE
          </v-list-item-title>
          <v-list-item-subtitle>

          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     drawer: false,
     items: [
          { title: 'grid-page', icon: 'mdi-image',to:'/grid-system' },
          { title: 'INFO', icon: 'mdi-view-dashboard' },
          { title: 'RELAY', icon: 'mdi-view-dashboard' },
          { title: 'ALARM', icon: 'mdi-view-dashboard' },
          { title: 'SETTING', icon: 'mdi-view-dashboard' },
          { title: 'EVENT', icon: 'mdi-view-dashboard',to:'/' },
          { title: 'MEASURE', icon: 'mdi-view-dashboard' },
        ],
        right: null,
  }),
};
</script>
