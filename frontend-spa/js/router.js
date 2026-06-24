const routes = [

    // =========================
    // PUBLIC
    // =========================

    {
        path: '/',
        component: Home
    },

    {
        path: '/login',
        component: Login
    },

    // =========================
    // DASHBOARD
    // =========================

    {
        path: '/dashboard',
        component: Dashboard
    },

    // =========================
    // BUKU
    // =========================

    {
        path: '/buku',
        component: Buku
    },

    {
        path: '/tambah-buku',
        component: TambahBuku
    },

    {
        path: '/edit-buku/:id',
        component: EditBuku
    },

    // =========================
    // ANGGOTA
    // =========================

    {
        path: '/anggota',
        component: Anggota
    },

    {
        path: '/tambah-anggota',
        component: TambahAnggota
    },

    {
        path: '/edit-anggota/:id',
        component: EditAnggota
    },

    // =========================
    // PEMINJAMAN
    // =========================

    {
         path: '/peminjaman',
         component: Peminjaman
    },

    {
         path: '/tambah-peminjaman',
         component: TambahPeminjaman
    },

    {
         path: '/edit-peminjaman/:id',
         component: EditPeminjaman
    }

];

// =========================
// ROUTER
// =========================

const router = VueRouter.createRouter({

    history:
        VueRouter.createWebHashHistory(),

    routes

});