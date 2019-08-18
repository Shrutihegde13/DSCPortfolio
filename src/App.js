import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(4),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  content : {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(8),
  padding : theme.spacing(8,0,6),
  marginRight: theme.spacing(12),
  marginLeft : theme.spacing(14),
  marginBottom : theme.spacing(8),
  paddingBottom: theme.spacing(8,0,6)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    align: 'center',
    padding: theme.spacing(8, 0, 6),
    marginRight: theme.spacing(16),
    marginBottom : theme.spacing(4),
    paddingBottom: theme.spacing(8,0,6),
  },
  cardMedia: {
    paddingTop: '60.25%', // 16:9
  },
  cardMediaBottom : {
    paddingTop: '70%'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Digital Signature Certificate Providers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Digital Signature Providers
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            We aim to cater all the Companies and Individual requirements pertaining to Digital Signatures. 
            Digital Signature authenticates the identity of company/Individual while MCA ROC filing,
             e tendering, e procurement, Income Tax efiling, Foreign Trade, EPFO, Trademark etc.
            </Typography>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
              <Grid xs={12} sm={8} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.esignindia.com/wp-content/uploads/2015/02/class-3-digital-signature-certificates.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Class 3
                    </Typography>
                    <Typography>
                    By Using This Certificate You can Participate/Bid in Any Kind of On-line Tenders/Auction across India. 
                    To participate in the e-tendering process, every vendor is required to use a Class 3 Digital Signatures Certificate.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={8} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://5.imimg.com/data5/JM/VE/MY-47786397/class-2-digital-signature-certificate-250x250.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      Class 2
                    </Typography>
                    <Typography>
                    Class 2 Digital Signatures are used for Income Tax E-Filing, Company or LLP Incorporation, Annual Return Filing, etc,
                    Class 2 Digital Signatures are required to file documents electronically with the Ministry of Corporate Affairs and Income Tax Department.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <div className={classes.content} align="center">
              <Grid xs={16} sm={12} md={10}>
                <Card className={classes.card} align="center">
                  <CardMedia
                    className={classes.cardMediaBottom}
                    image="https://www.etenderdsc.com/images/dgft-digital-signature.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DGFT
                    </Typography>
                    <Typography>
                    A Digital Signature Certificate authenticates your identity electronically. It also provides you with a high level of security for your online transactions by ensuring absolute privacy of the information exchanged using a digital certificate. 
                    You can use certificates to encrypt information such that only the intended recipient can read it. 
                    You can digitally sign information to assure the recipient that it has not been changed in transit, and also verify your identity as the sender of the message.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 
              </div>
          </Grid>
        </Container>
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h4" align="center" gutterBottom>
         Contact Me
        </Typography>
        <Box fontWeight="fontWeightBold" align="center" m={1}>
          Email : shruti13.hegde@gmail.com
        </Box>
        <Box fontWeight="fontWeightBold" align="center" m={1}>
        Contact Number : 9986720247
        </Box>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
  

