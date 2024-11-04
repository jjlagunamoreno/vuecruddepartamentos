<template>
  <div>
    <h1>Delete Departamento</h1>
  </div>
</template>

<script>
import DeleteDepartamento from "./../services/serviceDepartamentos";

const service = new DeleteDepartamento();
export default {
  name: "DeleteDepartamento",
  mounted() {
    let id = this.$route.params.id;
    service.deleteDepartamento(id).then((result) => {
      console.log(result);
      this.$router.push("/");
    });
  },
};
</script>