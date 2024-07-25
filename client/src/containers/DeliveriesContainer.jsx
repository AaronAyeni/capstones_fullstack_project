import DeliveryComponent from "../components/DeliveryComponent";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


const DeliveriesContainer = ({allWayPointData,deliveryData}) => {


    return (
        <>
            <main className='main-component-sizing'>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column', width: '100%'}}>



                            <DeliveryComponent allWayPointData = {allWayPointData} deliveryData = {deliveryData}/>

                            </Paper>
                        </Grid>
                    </Grid>
                </Container> 
            </main>
        </>
    )
    
}


export default DeliveriesContainer;

