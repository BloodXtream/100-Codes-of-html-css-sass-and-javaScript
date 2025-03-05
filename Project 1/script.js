let istatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")
let check = 0

addFriend.addEventListener("click", () => {
    if (check === 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML = "Unfollow";
        check = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        addFriend.innerHTML = "Follow";
        check = 0;
    }
})