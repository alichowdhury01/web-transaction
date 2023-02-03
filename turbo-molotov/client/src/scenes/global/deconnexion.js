const deconnexion = () => {
    localStorage.setItem("session", "");
    console.log("Session = " + localStorage.getItem("session"));
}
export default deconnexion;