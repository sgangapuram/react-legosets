const LegoSet = (set) => {
    console.log('set---',set.set.name);
    return (
        <div><div>{set.set.name}</div>
        <img alt={set.set.name} src={'https://picsum.photos/200'}/>
        </div>
    );
};

export default LegoSet;