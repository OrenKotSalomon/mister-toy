
const { useState, useRef, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

import { updateUserPref } from "../store/user.action.js"
import { TodoList } from "../cmps/todo-list.jsx"
import { UserActivities } from "../cmps/user-activities.jsx"
import { userService } from "../services/user.service.js"

export function UserPreview({ getUserPrefs }) {
    const user = useSelector((storeState) => storeState.userModule.user)
    const userTodos = useSelector((storeState) => storeState.userModule.userTodos)
    const [updatedUser, setUpdatedUser] = useState(user)

    const input = useRef()

    useEffect(() => {


    }, [updatedUser]);

    function handleChange({ target }) {
        let { value, name: field, type } = target
        setUpdatedUser((prevUser) => {

            return { ...prevUser, [field]: value }
        })
    }


    function onSumbitUserPref(ev) {
        ev.preventDefault()
        input.current.value = ''
        updateUserPref(updatedUser)
        getUser()
    }

    function getUser() {
        return userService.getById(user._id).then(user => {
            getUserPrefs(user.background, user.txtColor)
        })
    }

    return (
        <section className="user-preview">
            <div className="user-edit-container">
                <h2>Profile</h2>
                <form onSubmit={onSumbitUserPref}>
                    <label htmlFor="fullname"></label>
                    Name:
                    <input ref={input} type="text" name="fullname" id="fullname" placeholder="Your name" onChange={handleChange} />
                    <label htmlFor="background"></label>
                    BG color:
                    <input type="color" name="background" id="background" onChange={handleChange} />
                    <label htmlFor="txtColor"></label>
                    Text color:
                    <input type="color" name="txtColor" id="txtColor" onChange={handleChange} />
                    <button>sumbit</button>
                </form>
            </div>
            <TodoList todos={userTodos} />
            <UserActivities activities={user.activities} />

        </section>

    )
} 