import { createRouter, createWebHistory } from "vue-router";

const HomePage = () =>
  import(
    /* webpackChunkName: "landing-page" */ "@/views/HomePage.vue"
  );

const routes = [

  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "Documents | RIKE-SD",
      requiresAuth: true,
      metaTags: [
        {
          name: "description",
          content: "The document dashboard page of RIKE-SD.",
        },
        {
          property: "og:description",
          content: "The document dashboard page of RIKE-SD.",
        },
      ],
    },
  },

  {
    path: "/:catchAll(.*)",
    component: () => import("@/components/NotFound.vue"),
    meta: {
      title: "Error 404 | RIKE-SD",
      metaTags: [
        {
          name: "description",
          content: "The error 404 page of RIKE-SD.",
        },
        {
          property: "og:description",
          content: "The error 404 page of RIKE-SD.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;

router.beforeEach((to, from, next) => {
  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
