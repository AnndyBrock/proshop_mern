import React, {useEffect, useState} from 'react';
import {Row,Col,Button,Form} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message';
import Loader from '../components/Loader'
import {getDetailUser, updateDetailUser} from '../actions/userAction'
const ProfileScreen = ({history}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message,  setMessage] = useState(null);

    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const userUpdate = useSelector(state => state.userUpdate);
    const {success} = userUpdate;

    useEffect(()=>{
        if (!userInfo){
            history.push('/login')
        }else {
            if(!user.name){
                dispatch(getDetailUser('profile'))
            }else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    },[dispatch, history, userInfo, user]);

    const submitHandler = (e)=> {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        }else{
            //dispatch update profile
            dispatch(updateDetailUser({id: user._id, name, email, password}))
        }
    };

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message> }
                {error && <Message variant='danger'>{error}</Message> }
                {success && <Message variant='success'>Profile Successful Updated</Message> }
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>
                            Enter Your Name
                        </Form.Label>
                        <Form.Control type='name' placeholder='Enter your name' value={name}
                                      onChange={(e)=>setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email}
                                      onChange={(e)=>setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>
                            Your Password
                        </Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password}
                                      onChange={(e)=>setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>
                            Your Password
                        </Form.Label>
                        <Form.Control type='password' placeholder='Confirm your password' value={confirmPassword}
                                      onChange={(e)=>setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='success'> Update User </Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>Orders list</h2>
            </Col>
        </Row>
    );
};

export default ProfileScreen;
