<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon to="/signin" v-show="!isSignedIn">
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
      <v-btn icon to="/signup" v-show="!isSignedIn">
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isSignedIn: false,
      miniVariant: true,
      fixed: true,
      right: true,
      title: 'Sayings App (格言アプリ）',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-account-box-multiple',
          title: 'Users',
          to: '/users',
        },
        {
          icon: 'mdi-clipboard-text-multiple-outline',
          title: 'Sayings',
          to: '/sayings',
        },
      ],
    }
  },
}
</script>
