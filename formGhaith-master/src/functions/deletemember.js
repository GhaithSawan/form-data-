
const Deletemember = (id, setdata, data) => {
    let apdatedata = data.filter((e) => e.id !== id)
    setdata(apdatedata)
}

export default Deletemember