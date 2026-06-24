const Dashboard = {

template:`

<div>

    <!-- HEADER -->

    <header class="header">

        <div class="logo">

            <i class="bi bi-book-half"></i>

            BookLoop

        </div>

        <nav class="nav-menu">

            <router-link to="/dashboard">
                <i class="bi bi-grid"></i>
                Dashboard
            </router-link>

            <router-link to="/buku">
                <i class="bi bi-book"></i>
                Buku
            </router-link>

            <router-link to="/anggota">
                <i class="bi bi-people"></i>
                Anggota
            </router-link>

            <router-link to="/peminjaman">
                <i class="bi bi-arrow-left-right"></i>
                Peminjaman
            </router-link>

            <router-link to="/">
                <i class="bi bi-box-arrow-right"></i>
                Keluar
            </router-link>

        </nav>

    </header>


    <div class="content">

        <!-- HERO -->

        <div class="topbar">

            <div>

                <h2>

                    Dashboard

                </h2>

                <p>

                    Selamat datang di Sistem Informasi Perpustakaan Digital.

                </p>

            </div>

            <div class="user-badge">

                <i class="bi bi-person-circle"></i>

                Administrator

            </div>

        </div>

        <!-- STATISTIC -->

        <div class="cards">

            <div class="card">

                <div class="card-icon blue">

                    <i class="bi bi-book"></i>

                </div>

                <div class="card-title">

                    Total Buku

                </div>

                <div class="card-value">

                    500+

                </div>

                <div class="card-desc">

                    Koleksi tersedia

                </div>

            </div>

            <div class="card">

                <div class="card-icon purple">

                    <i class="bi bi-people"></i>

                </div>

                <div class="card-title">

                    Anggota

                </div>

                <div class="card-value">

                    150

                </div>

                <div class="card-desc">

                    Pengguna aktif

                </div>

            </div>

            <div class="card">

                <div class="card-icon green">

                    <i class="bi bi-arrow-repeat"></i>

                </div>

                <div class="card-title">

                    Peminjaman

                </div>

                <div class="card-value">

                    86

                </div>

                <div class="card-desc">

                    Sedang dipinjam

                </div>

            </div>

            <div class="card">

                <div class="card-icon orange">

                    <i class="bi bi-check-circle"></i>

                </div>

                <div class="card-title">

                    Pengembalian

                </div>

                <div class="card-value">

                    97%

                </div>

                <div class="card-desc">

                    Tepat waktu

                </div>

            </div>

        </div>

        <!-- QUICK ACTION -->

<div class="dashboard-grid">

    <!-- MENU CEPAT + INFORMASI SISTEM -->

<div class="dashboard-row">

    <!-- MENU CEPAT -->

    <div class="dashboard-box menu-box">

        <div class="box-title">

            <h3>
                <i class="bi bi-grid-fill"></i>
                Menu Cepat
            </h3>

            <span class="menu-count">
                6 Menu
            </span>

        </div>

        <div class="quick-menu">

            <router-link to="/dashboard" class="quick-card dashboard-card">

                <div class="quick-icon">
                    <i class="bi bi-speedometer2"></i>
                </div>

                <div class="quick-info">
                    <h4>Dashboard</h4>
                    <small>Halaman utama</small>
                </div>

            </router-link>

            <router-link to="/buku" class="quick-card book-card">

                <div class="quick-icon">
                    <i class="bi bi-book-half"></i>
                </div>

                <div class="quick-info">
                    <h4>Data Buku</h4>
                    <small>Kelola koleksi</small>
                </div>

            </router-link>

            <router-link to="/anggota" class="quick-card anggota-card">

                <div class="quick-icon">
                    <i class="bi bi-people-fill"></i>
                </div>

                <div class="quick-info">
                    <h4>Anggota</h4>
                    <small>Kelola anggota</small>
                </div>

            </router-link>

            <router-link to="/peminjaman" class="quick-card pinjam-card">

                <div class="quick-icon">
                    <i class="bi bi-arrow-left-right"></i>
                </div>

                <div class="quick-info">
                    <h4>Peminjaman</h4>
                    <small>Data transaksi</small>
                </div>

            </router-link>

            <router-link to="/tambah-buku" class="quick-card tambah-card">

                <div class="quick-icon">
                    <i class="bi bi-plus-circle-fill"></i>
                </div>

                <div class="quick-info">
                    <h4>Tambah Buku</h4>
                    <small>Buku baru</small>
                </div>

            </router-link>

            <router-link to="/tambah-anggota" class="quick-card user-card">

                <div class="quick-icon">
                    <i class="bi bi-person-plus-fill"></i>
                </div>

                <div class="quick-info">
                    <h4>Tambah Anggota</h4>
                    <small>Member baru</small>
                </div>

            </router-link>

        </div>

    </div>

    <!-- INFORMASI SISTEM -->

    <div class="dashboard-box info-box">

        <h3>

            <i class="bi bi-info-circle-fill"></i>

            Informasi Sistem

        </h3>

        <ul class="activity-list">

            <li>

                <i class="bi bi-book-fill"></i>

                Kelola seluruh koleksi buku perpustakaan digital.

            </li>

            <li>

                <i class="bi bi-people-fill"></i>

                Kelola data anggota perpustakaan secara terpusat.

            </li>

            <li>

                <i class="bi bi-arrow-left-right"></i>

                Catat transaksi peminjaman dan pengembalian buku.

            </li>

            <li>

                <i class="bi bi-shield-check"></i>

                Sistem terintegrasi dengan database MySQL.

            </li>

            <li>

                <i class="bi bi-cloud-check-fill"></i>

                Data tersimpan secara real-time.

            </li>

        </ul>

    </div>

</div>
</div>

</div>

    </div>

</div>

`

}