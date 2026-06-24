const Home = {

template: `

<div>

    <!-- HEADER -->

    <header class="header">

        <div class="logo">
            <i class="bi bi-book-half"></i>
            BookLoop
        </div>

        <nav class="nav-menu">

            <router-link to="/">
                <i class="bi bi-house-door"></i>
                Home
            </router-link>

            <router-link to="/login">
                <i class="bi bi-box-arrow-in-right"></i>
                Login
            </router-link>

        </nav>

    </header>

    <!-- CONTENT -->

    <div class="content">

        <!-- HERO -->

        <section class="hero">

            <div class="hero-left">

                <span class="hero-badge">

                    <i class="bi bi-stars"></i>

                    Modern Library System

                </span>

                <h1>

                    Kelola Perpustakaan
                    Lebih Cepat &
                    Profesional

                </h1>

                <p>

                    BookLoop membantu mengelola data buku,
                    anggota, dan transaksi peminjaman dalam
                    satu dashboard modern yang cepat,
                    aman, dan mudah digunakan.

                </p>

                <div class="hero-action">

                    <router-link
                    to="/login"
                    class="btn-primary">

                        <i class="bi bi-box-arrow-in-right"></i>

                        Masuk Dashboard

                    </router-link>

                </div>

            </div>

            <div class="hero-right">

                <div class="hero-circle">

                    <i class="bi bi-book-half"></i>

                </div>

            </div>

        </section>

        <!-- DASHBOARD CARD -->

        <div class="cards">

            <div class="card">

                <div class="card-icon">
                    <i class="bi bi-book"></i>
                </div>

                <div class="card-title">
                    Total Buku
                </div>

                <div class="card-value">
                    500+
                </div>

                <div class="card-desc">
                    Koleksi buku digital
                </div>

            </div>

            <div class="card">

                <div class="card-icon">
                    <i class="bi bi-people"></i>
                </div>

                <div class="card-title">
                    Anggota
                </div>

                <div class="card-value">
                    100+
                </div>

                <div class="card-desc">
                    Pengguna aktif
                </div>

            </div>

            <div class="card">

                <div class="card-icon">
                    <i class="bi bi-arrow-repeat"></i>
                </div>

                <div class="card-title">
                    Peminjaman
                </div>

                <div class="card-value">
                    Aktif
                </div>

                <div class="card-desc">
                    Transaksi berjalan
                </div>

            </div>

            <div class="card">

                <div class="card-icon">
                    <i class="bi bi-shield-check"></i>
                </div>

                <div class="card-title">
                    Sistem
                </div>

                <div class="card-value">
                    100%
                </div>

                <div class="card-desc">
                    Aman & Terintegrasi
                </div>

            </div>

        </div>

        <!-- FEATURES -->

        <section class="feature-section">

            <div class="feature-card">

                <i class="bi bi-speedometer2"></i>

                <h3>Dashboard Modern</h3>

                <p>
                    Tampilan cepat, bersih, dan responsif.
                </p>

            </div>

            <div class="feature-card">

                <i class="bi bi-book"></i>

                <h3>Manajemen Buku</h3>

                <p>
                    Tambah, edit, hapus data buku dengan mudah.
                </p>

            </div>

            <div class="feature-card">

                <i class="bi bi-person-lines-fill"></i>

                <h3>Data Anggota</h3>

                <p>
                    Kelola seluruh anggota perpustakaan.
                </p>

            </div>

            <div class="feature-card">

                <i class="bi bi-arrow-left-right"></i>

                <h3>Peminjaman</h3>

                <p>
                    Monitoring transaksi secara realtime.
                </p>

            </div>

        </section>

    </div>

</div>

`

}