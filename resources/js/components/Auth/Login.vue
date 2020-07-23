<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item >
      <a-input 
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <router-link to="/register" class="nav-item nav-link">
        register now!
      </router-link>  
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      testError:'',
      country:'',
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.login(values.userName,values.password);
          //console.log('Received values of form: ', values);
        }
      });
    },

    login (email,password) {
      this.$store
        .dispatch('login', {
          email: email,
          password: password
        })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch(err => {
        var errors =null;
        var status=err.response.status;
        //console.log(status);
            if (status == 422){
             const {
                    errors
                } = err.response.data;

                if (errors) {
                 this.form.setFields({
                                      "userName": {
                                        "errors": [
                                          {
                                            "message": errors.email,
                                            "field": "userName"
                                          }
                                        ]
                                      },
                                      "password": {
                                        "errors": [
                                          {
                                            "message": errors.password,
                                            "field": "password"
                                          }
                                        ]
                                      }
                                    });
              }
             if (err.response.data.error) {
              var inval=err.response.data.error;
             this.form.setFields({
                                  "userName": {
                                    "errors": [
                                      {
                                        "message": inval,
                                        "field": "userName"
                                      }
                                    ]
                                  }
                                });
              }
          }else{
            this.openNotification('error','Error during login','Please contact admin web-site');
          }
        })
    },

    openNotification: function (type, m, d) {
        this.$notification.config({
            placement: 'topRight',
            top: 35,
            duration: 8,
        });
        this.$notification[type]({
          message: m,
          description: d,
        });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>