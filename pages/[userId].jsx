
export default function UserId(props) {

    return (
        <div>
            <h1>{props.id}</h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const UserId = params.userId;

    return {
        props: {
            id: 'userId-' + UserId
        }
    }

}