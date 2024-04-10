import { jwtDecode } from "jwt-decode";

const AuthService = {
    SalvarToken(token) {
        localStorage.setItem("jwt", token)
    },
    VerificarSeUsuarioEstaLogado () {
        const token = localStorage.getItem("jwt");
        if (token == null) {return false}

        const DataAtual = Date.parse(new Date()) / 1000;

        const userData = jwtDecode(token);

        if (DataAtual > userData.exp){
            localStorage.removeItem("jwt");
            return false;
        }

        return true; 
    }
};

export default AuthService;