import DeliveryComponent from "../components/DeliveryComponent";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


const DeliveriesContainer = ({allWayPointData,deliveryData}) => {


    return (
        <>
            <main>
            <h1 className="header-colour">Deliveries</h1>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <DeliveryComponent allWayPointData = {allWayPointData} deliveryData = {deliveryData}/>  
                        </Grid>
                    </Grid>
                </Container> 
            </main>
        </>
    )
    
}


export default DeliveriesContainer;

