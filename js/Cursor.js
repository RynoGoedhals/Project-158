AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {type: "string", default: ""}
    },

    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const posterId = [
                "ironman",
                "spiderman",
                "batman",
                "superman"
            ];

            if(posterId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");

                postersContainer.setAttribute("cursor-listener", {
                    selectedItemId: id
                });

                this.el.setAttribute("material", {
                    color: "#1565c0",
                    opacity: 1
                });
            }
        });
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", () => {
            const {selectedItemId} = this.data;

            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");

                if(id == selectedItemId){
                    el.setAttribute("material", {
                        color: "#fff",
                        opacity: 1
                    });
                }
            }
        });
    }
})