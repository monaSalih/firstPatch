import React from 'react'
import axios from 'axios';
import StoreData from './StoreData';
import UpDateModel from './UpDateModel'
class FavorateStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeData: [],
            renderStoreData: [],
            showRecipe: false,
            showFormUpdate: false,
            chosenOne: {},
            upDateData:[],
        }
    }
    componentDidMount = async () => {
        const dataRecipe = await axios.get(`${process.env.REACT_APP_SERVER}/getFavDataRecipe`)
        this.setState({
            renderStoreData: dataRecipe.data,
            showRecipe: true,
        })
        console.log(dataRecipe.data);
        await console.log(this.state.renderStoreData);
    }


    ///////////////////////***delet function */
    deletFunction = async (itemdelete) => {
        const id = this.state.renderStoreData[itemdelete]._id;
        // /console.log(id,"render id");
        const dataAfterDelet = await axios.delete(`${process.env.REACT_APP_SERVER}/deletDataRecipe/${id}`)
        this.setState({
            renderStoreData: dataAfterDelet.data,
        })
    }
    ////////////////////////////////**update function */
    updateForm = async (indx) => {
        const UpdateData = this.state.renderStoreData[indx];
        console.log(UpdateData, "UpdateData result");
        await this.setState({
            showFormUpdate: true,
            chosenOne: UpdateData,

        })
    }
    updateCurrentData = async (event) => {
        event.preventDefault()
        console.log(this.state.chosenOne.image);
        let sendData={
            label:event.target.recName.value,
            image:event.target.recUrl.value
        }
        // console.log(sendData,"sendData result00000");
        const idItem=this.state.chosenOne._id;
        console.log(idItem);
        console.log(`${process.env.REACT_APP_SERVER}/updateDataRecipe/${idItem}`);
        const updateUrl=await axios.put(`${process.env.REACT_APP_SERVER}/updateDataRecipe/${idItem}`,sendData)
        // console.log(updateUrl,"1111111111111111111111111test");
        await this.setState({
            storeData:updateUrl.data
        })
        const dataRecipe = await axios.get(`${process.env.REACT_APP_SERVER}/getFavDataRecipe`)
        console.log(dataRecipe,"result1111");

        await this.setState({
            renderStoreData:dataRecipe.data
        })
        // console.log(this.state.storeData);
    }
    closeModule=()=>{
        this.setState({
            showFormUpdate:false
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.showFormUpdate &&
                    <UpDateModel updateCurrentData={this.updateCurrentData} chosenOne={this.state.chosenOne} closeModule={this.closeModule} />
                }
                {this.state.showRecipe && this.state.renderStoreData.map((dataStore, idx) => {
                    return (
                        <StoreData
                            index={idx}
                            dataStore={dataStore}
                            deletFunction={this.deletFunction}
                            updateForm={this.updateForm}
                             />
                    )
                })

                }

            </div>
        )
    }
}

export default FavorateStore
