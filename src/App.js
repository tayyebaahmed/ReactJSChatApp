import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) 
    return <LoginForm />;

    return (
        <ChatEngine 
            height="100vh"
            projectID="f142b6f1-2c8c-4b7b-891b-24c1a445919a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;