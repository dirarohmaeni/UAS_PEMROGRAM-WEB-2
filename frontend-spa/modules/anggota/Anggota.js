const Anggota = {

    data() {

        return {

            anggota: [],
            search: ''

        }

    },

    computed: {

        filteredAnggota() {

            return this.anggota.filter(item =>

                (item.nama || '')
                .toLowerCase()
                .includes(this.search.toLowerCase())

                ||

                (item.email || '')
                .toLowerCase()
                .includes(this.search.toLowerCase())

            );

        }

    },

    async mounted() {

        await this.loadData();

    },

    methods: {

        async loadData() {

            try {

                const response = await axios.get(
                    'http://localhost:8080/anggota'
                );

                this.anggota = response.data;

            } catch(error) {

                console.log(error);

                alert(
                    'Gagal mengambil data anggota'
                );

            }

        },

        async hapusAnggota(id) {

            if(
                !confirm(
                    'Yakin ingin menghapus anggota ini?'
                )
            ){
                return;
            }

            try {

                await axios.delete(
                    `http://localhost:8080/anggota/${id}`,
                    {
                        headers:{
                            Authorization:
                            'Bearer ELIBRARY_TOKEN_123'
                        }
                    }
                );

                alert(
                    'Data anggota berhasil dihapus'
                );

                await this.loadData();

            }

            catch(error){

                console.log(error);

                alert(
                    'Gagal menghapus anggota'
                );

            }

        }

    },

template:`

<div class="content">

    <!-- TOPBAR -->

    <div class="topbar">

        <div>

            <h2>

                <i class="bi bi-people-fill"></i>

                Manajemen Anggota

            </h2>

            <p>

                Kelola seluruh data anggota perpustakaan.

            </p>

        </div>

        <div class="user-badge">

            <i class="bi bi-person-badge"></i>

            {{ anggota.length }} Anggota

        </div>

    </div>

    <!-- CARD -->

    <div class="cards">

        <div class="card">

            <div class="card-icon blue">

                <i class="bi bi-people-fill"></i>

            </div>

            <div class="card-title">

                Total Anggota

            </div>

            <div class="card-value">

                {{ anggota.length }}

            </div>

        </div>

        <div class="card">

            <div class="card-icon green">

                <i class="bi bi-envelope-fill"></i>

            </div>

            <div class="card-title">

                Memiliki Email

            </div>

            <div class="card-value">

                {{

                    anggota.filter(

                        x => x.email

                    ).length

                }}

            </div>

        </div>

        <div class="card">

            <div class="card-icon purple">

                <i class="bi bi-telephone-fill"></i>

            </div>

            <div class="card-title">

                Nomor Telepon

            </div>

            <div class="card-value">

                {{

                    anggota.filter(

                        x => x.telepon

                    ).length

                }}

            </div>

        </div>

    </div>

    <!-- ACTION -->

    <div class="page-action">

        <div class="search-box">

            <input

                class="form-input"

                v-model="search"

                placeholder="Cari nama atau email..."

            >

        </div>

        <router-link

            to="/tambah-anggota"

            class="btn-success"

        >

            <i class="bi bi-plus-circle"></i>

            Tambah Anggota

        </router-link>

    </div>

    <!-- TABLE -->

    <div class="table-card">

        <table class="book-table">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Nama</th>

                    <th>Email</th>

                    <th>Telepon</th>

                    <th>Alamat</th>

                    <th>Aksi</th>

                </tr>

            </thead>

            <tbody>

                <tr

                    v-for="item in filteredAnggota"

                    :key="item.id"

                >

                    <td>

                        #{{ item.id }}

                    </td>

                    <td>

                        <strong>

                            {{ item.nama }}

                        </strong>

                    </td>

                    <td>

                        {{ item.email }}

                    </td>

                    <td>

                        {{ item.telepon }}

                    </td>

                    <td>

                        {{ item.alamat }}

                    </td>

                    <td>

                        <div class="action-group">

                            <router-link

                                :to="'/edit-anggota/' + item.id"

                                class="btn-primary"

                            >

                                <i class="bi bi-pencil-square"></i>

                                Edit

                            </router-link>

                            <button

                                class="btn-danger"

                                @click="hapusAnggota(item.id)"

                            >

                                <i class="bi bi-trash3"></i>

                                Hapus

                            </button>

                        </div>

                    </td>

                </tr>

                <tr

                    v-if="filteredAnggota.length==0"

                >

                    <td

                        colspan="6"

                        class="empty-table"

                    >

                        <div class="empty-state">

                            <i class="bi bi-people"></i>

                            <h3>

                                Data Anggota Tidak Ditemukan

                            </h3>

                            <p>

                                Belum ada data anggota atau hasil pencarian kosong.

                            </p>

                        </div>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</div>

`

}