sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demo/ladera/orderview/test/integration/FirstJourney',
		'demo/ladera/orderview/test/integration/pages/OrderSetMain'
    ],
    function(JourneyRunner, opaJourney, OrderSetMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demo/ladera/orderview') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetMain: OrderSetMain
                }
            },
            opaJourney.run
        );
    }
);