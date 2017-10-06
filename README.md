Welcome to the RSS Feed -> Web Push
===================================

No state is stored on this server.

This works by: 

* Generating a unique Web push URL for you at [webpush.rocks](https://webpush.rocks)
* Subscribing you to the remote hub with a unqiue url generated from [webpush.rocks](https://webpush.rocks)
* When a feed updates, it pings the hub, which pings this, and then sends the update to your subscription.

Even though no of subscription information is retained on webpush.rocks or this server. This is an experiment, don't assume that the above is secure.

Known issues
------------

* Lease renewal is not managed