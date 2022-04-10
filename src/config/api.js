import axios from "axios";

var URLS = "https://fe.dev.dxtr.asia/api";
var TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGUzYmE2ZjdjZjU2MjRkODdkMzAzYTBmM2MyMWY3MzAwZDZhMmYzOGQ2YjZkOThkYjlkYThiMDU2NzNlZWQ3YWI1NGFkZGRjYzA1MDI1YmQiLCJpYXQiOjE2NDk1NDQ0MTUsIm5iZiI6MTY0OTU0NDQxNSwiZXhwIjoxNjgxMDgwNDE1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.LhaZ1ehq7CeITQZv6bbOKrca4CZIYhW_-5PSBPalGlYm-s-mNuqxGEVnGq_NCoq3UUh6MdGV4lVgIGCw1ff8L2zQuoGORY0C36qX29AjroJhb-Q_iFnvYLFPs9f1QNHestle4Ny5kTSP2xZNqCgBpzZQZSG38hBQKWvmIqOhDfwl_PHcxd4srZ2bdwRS1aJ-bvDOQEP3V9yUiRJwBdO__78E__WfaQUpGj82cmUgNigVrwAHItENpH19mS_J6BSOczDsh6_ozlMvQLmOe1vDJ4Hkp50XWu7M1ufZL0cscoVp2KjFkmhfYwnldDlAYfNy7sZAcDnlg22K_VUS7TVG4ej2Z5LNmuBXotCUK1wRB0NRdMUHI6G-i8zNJvPWxgOLFfONQdNVnBUzXvk_Ye0ZP5gCYcqmjVc0iQLCrzhO9wnkLfV-NrZXpoudJ42r8yWStPZRC0oo3eTfZYMSoSdwzFBoBqZP5R8a3FaH_ojlGJ4h9ZstYD95JRuZ3-YJQzeC1dAkfY2G70cjDq1VrwxI4Dl04HA2jrgiktFruhYwg5-Ibf1g9vmjBRngnuf4MgIkbRxulMpunTd4de4gcCp99usK8NvvI79Vyj2TlLSzDRwPreZcB_YPza9G4FUYLHugAIdkuClpWdjXAok9YguDrP97QsZfEzUbIBLVP93TQXM";

const api = {
  actions: {
    get_product() {
      return new Promise((resolve, reject) => {
        try {
          axios
            .get(URLS + `/products`, {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              resolve(response);
              console.log(response);
            });
        } catch (error) {
          reject(error);
          console.log(error);
        }
      });
    },
  },
};

export default api;
