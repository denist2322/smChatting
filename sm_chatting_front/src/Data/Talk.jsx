import axios from "axios";

const Talk = () => {
    const TalkData = await axios({
        url : `http://localhost:8031/user/talk`,
        mehtod : "POST",
    })
};
