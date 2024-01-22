import React, {useState} from 'react';
import Question from "../question/Question";
import Response from "../response/Response";

const Home = () => {

    const [response, setResponse] = useState(false);

    return (
        <>
            {response ? <Response /> : <Question setResponse={setResponse} />}
        </>
    );
};

export default Home;
