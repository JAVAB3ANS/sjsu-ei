var app = new Vue({
    el: "#app",
    delimiters : ["[[", "]]"],
    data: { CSU_GPA: 0, SAT_EBRW: 0, SAT_MATH: 0, SERVICE_AREA: 0, EI_STANDARD: 2950, DECISION: null, EI: null, COE_EI: null },
    methods: {
        calculate: function () {
            (EI = 0),
                (EI += 800 * Math.min(4.2, parseFloat(this.CSU_GPA))),
                (EI += Math.min(800, parseInt(this.SAT_EBRW)) + Math.min(800, parseInt(this.SAT_MATH))),
                Math.max(0, parseFloat(this.SERVICE_AREA)) > 0 && Math.max(0, parseFloat(this.SERVICE_AREA) <= 20) ? (EI += 200) : (EI += 0),
                (this.EI = EI),
                (COE_EI = 0),
                (COE_EI += 800 * Math.min(4.2, parseFloat(this.CSU_GPA))),
                (COE_EI += (Math.min(800, parseInt(this.SAT_EBRW)) + 3 * Math.min(800, parseInt(this.SAT_MATH))) / 2),
                Math.max(0, parseFloat(this.SERVICE_AREA)) > 0 && Math.max(0, parseFloat(this.SERVICE_AREA) <= 20) ? (COE_EI += 200) : (COE_EI += 0),
                (this.COE_EI = COE_EI),
                console.log("Your SJSU EI is: " + EI),
                console.log("Your SJSU COE EI is: " + COE_EI),
                this.EI >= Math.min(2950, parseInt(this.EI_STANDARD)) && this.EI <= Math.max(3750, parseInt(this.EI_STANDARD))
                    ? ((DECISION = "You've met minimum requirements for undergraduate admission."), (this.DECISION = DECISION))
                    : this.EI >= Math.min(3750, parseInt(this.EI_STANDARD)) && this.EI <= Math.max(4825, parseInt(this.EI_STANDARD))
                    ? ((DECISION = "You've exceeded minimum requirements for undergraduate admission."), (this.DECISION = DECISION))
                    : this.EI > Math.min(4825, parseInt(this.EI_STANDARD))
                    ? ((DECISION = "You've transcended minimum requirements for undergraduate admission."), (this.DECISION = DECISION))
                    : ((DECISION = "You've not met minimum requirements for undergraduate admission"), (this.DECISION = DECISION));
        },  
    }, 
});
function limitKeypress(t, e, E) {
    null != e && e.toString().length >= E && t.preventDefault();
}
document.onkeydown = function (t) {
    (189 !== t.key && 16 !== t.key && 187 !== t.key) || Event.preventDefault();
}; 