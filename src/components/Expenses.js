import './Expenses.css';
import './ExpenseItem';
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem
                title={props.things[0].title}
                amount={props.things[0].amount}
                date={props.things[0].date}
            />
            <ExpenseItem
                title={props.things[1].title}
                amount={props.things[1].amount}
                date={props.things[1].date}
            />
            <ExpenseItem
                title={props.things[2].title}
                amount={props.things[2].amount}
                date={props.things[2].date}
            />
            <ExpenseItem
                title={props.things[3].title}
                amount={props.things[3].amount}
                date={props.things[3].date}
            />
        </div>
    )
}

export default Expenses;