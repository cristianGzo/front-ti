<template>
    <section class="login_box_area section-margin">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="login_box_img">
                        <div class="hover">
                            <h4>New to our website?</h4>
                            <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                            <router-link class="button button-account" to="/register">Create an Account</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="login_form_inner">
                        <h3>Log in to enter</h3>
                        <form @submit.prevent="handleLogin" class="row login_form">
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" v-model="email" placeholder="Email" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <div class="creat_account"></div>
                            </div>
                            <div class="col-md-12 form-group">
                                <button type="submit" class="button button-login w-100">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            // Lógica para manejar el inicio de sesión
            console.log('Logging in with:', this.email, this.password);
        }
    }
};
</script>