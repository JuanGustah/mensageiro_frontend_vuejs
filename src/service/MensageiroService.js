import http from "@/common/http";

class MensageiroService {
    
    create(data) {
        console.log(data);
        return http.post("/usuario", data);
    }

    list() {
        return http.get("/usuario");
    }

    get(id){
        return http.get(`/usuario/${id}`);
    }

}

export default new MensageiroService();
