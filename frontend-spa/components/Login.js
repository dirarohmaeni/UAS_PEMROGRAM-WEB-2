const Login = {

    data() {

        return {

            username: '',
            password: ''

        }

    },

    methods: {

        login() {

            if(
                this.username.trim() === '' ||
                this.password.trim() === ''
            ){

                alert(
                    'Isi username dan password'
                );

                return;

            }

            localStorage.setItem(
                'isLoggedIn',
                true
            );

            this.$router.push(
                '/dashboard'
            );

        }

    },

    template: `

<div class="login-page">

    <div class="login-card">

        <div class="login-logo">

            <i class="bi bi-book-half"></i>

        </div>

        <h1 class="login-title">

            BookLoop

        </h1>

        <p class="login-subtitle">

            Administrator Login

        </p>

        <div class="form-group">

            <label>

                Username

            </label>

            <input
                v-model="username"
                class="form-input"
                placeholder="Masukkan username"
            >

        </div>

        <div class="form-group">

            <label>

                Password

            </label>

            <input
                v-model="password"
                type="password"
                class="form-input"
                placeholder="Masukkan password"
            >

        </div>

        <button
            @click="login"
            class="btn-primary login-btn"
        >

            <i class="bi bi-box-arrow-in-right"></i>

            Login

        </button>

    </div>

</div>

`

}