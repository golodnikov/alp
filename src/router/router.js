import { createRouter, createWebHistory } from "vue-router";
import index from '@/views/index.vue';
import services from '@/components/services.vue';
import clineWindows from '@/views/clineWindows.vue';
import StichBild from '@/views/StichBild.vue';
import VideoBild from '@/views/VideoBild.vue';
import SnowCline from '@/views/SnowCline.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/services',
            name: 'services',
            component: services,
            props: true
        },
        {
            path: '/clineWindows',
            name: 'clineWindows',
            component: clineWindows
        },
        {
            path: '/stichbild',
            name: 'StichBild',
            component: StichBild
        },
        {
            path: '/videobild',
            name: 'VideoBild',
            component: VideoBild
        },
        {
            path: '/snowcline',
            name: 'SnowCline',
            component: SnowCline
        },
    ]
})

export default router;