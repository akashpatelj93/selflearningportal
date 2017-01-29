         $(document).ready(function () {

            //Time to Market - New Products, Markets
             $('#gaugeContainer').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer').jqxGauge('value', 40);
         


             //Client / Partner / Staff Access to Systems (Global, Omni-Channel)

             $('#gaugeContainer-scale').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-scale').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-scale').jqxGauge('value', 130);




             //Data Informed Decision Making
             $('#gaugeContainer-settlements').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-settlements').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-settlements').jqxGauge('value', 90);
         



             //Compliance

              $('#gaugeContainer-recon').jqxGauge({
                ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-recon').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-recon').jqxGauge('value', 170);
         



             //Greater Available Functionality and Mash-ups
             $('#gaugeContainer-global').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-global').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-global').jqxGauge('value', 190);
         




             //Capture Market Share

             $('#gaugeContainer-finance').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-finance').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-finance').jqxGauge('value', 25);        



             //Improved Client Experience
             $('#gaugeContainer-clientExp').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-clientExp').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-clientExp').jqxGauge('value', 40);
      

             //Increase Share of Wallet (Up/Cross Sell)

             $('#gaugeContainer-shareWallet').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-shareWallet').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-shareWallet').jqxGauge('value', 120);
         
             //Accelerated Client/Product Onboarding
             $('#gaugeContainer-accelerate').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-accelerate').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-accelerate').jqxGauge('value', 59);
         

             //Self Service Features
             $('#gaugeContainer-selfService').jqxGauge({
                 ranges: [{ startValue: 0, endValue: 73, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 7, startWidth: 7 },
                          { startValue: 73, endValue: 146, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 7, startWidth: 7 },
                          { startValue: 146, endValue: 220, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 7, startWidth: 7 }],
                 ticksMinor: { interval: 5, size: '5%' },
                 ticksMajor: { interval: 10, size: '9%' },
                 value: 0,
                 width: 120,
                 height: 120,
                 colorScheme: 'scheme05',
                 animationDuration: 1200
             });
         
             $('#gaugeContainer-selfService').on('valueChanging', function (e) {
                 $('#gaugeValue').text(Math.round(e.args.value) + ' kph');
             });
         
             $('#gaugeContainer-selfService').jqxGauge('value', 90);
       




         });

