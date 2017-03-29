********************************************************************************
BASIC PROJECT INFO
********************************************************************************
Generic Leaderboard Display
Written by: Chris Milliano,
Started: 2/22/17


********************************************************************************
OVERALL CONCEPT NOTES
********************************************************************************

This is meant to display a contest leader board.

An interesting feature about how this works is rather than having each users
ranking icon styled by CSS it is actually an edited SVG created dynamically
based on need. This allows the freedom that a creative team could generate a
generic SVG. Once we have the SVG we can add IDs to key elements that will need
to be updated. This will mean that for a low cost the client can actually have
an extremely custom design in a very quick turn around time.




********************************************************************************
STILL TO DO
********************************************************************************

* Add a styling.json, similar to the generic ng-1 share site
  - Background color/image
  - Header color/image
  - Subtitle styling/input
  - Consider appropriate effects to include
  - Create a pattern option for user icons
* Add share options
  - Must be able to hide on live version
* Consider data sort/loading options
  - True vs Static
  - Live vs Share
* Make socket queueing update option
* Include offline storage/upload
* Create offline/socket mode
  - Must be able to store styling as backup
