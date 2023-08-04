<<<<<<< HEAD
#!/bin/bash/python3
"""
This is a flask app that integrates with airbnbn static html template.
"""
from flask import Flask, render_template, url_for
from models import storage
import uuid


# setup for flask
=======
#!/usr/bin/python3
"""
Flask App that integrates with AirBnB static HTML Template
"""
from flask import Flask, render_template, url_for
from models import storage
from uuid import uuid4, UUID

# flask setup
>>>>>>> refs/remotes/origin/master
app = Flask(__name__)
app.url_map.strict_slashes = False
port = 5000
host = '0.0.0.0'


<<<<<<< HEAD
# start rendering flask page
@app.teardown_appcontext
def teardown_db(exception):
    """
    this method calls .close() on the current SQLAlchemy session after each request
=======
# begin flask page rendering
@app.teardown_appcontext
def teardown_db(exception):
    """
    after each request, this method calls .close() (i.e. .remove()) on
    the current SQLAlchemy Session
>>>>>>> refs/remotes/origin/master
    """
    storage.close()


<<<<<<< HEAD
@app.route('/0-hbnb')
def hbnb_filters(the_id=None):
    """
    handles requests to custom template with, cities and amenities
=======
@app.route('/0-hbnb/')
def hbnb_filters(the_id=None):
    """
    handles request to custom template with states, cities & amentities
>>>>>>> refs/remotes/origin/master
    """
    state_objs = storage.all('State').values()
    states = dict([state.name, state] for state in state_objs)
    amens = storage.all('Amenity').values()
    places = storage.all('Place').values()
    users = dict([user.id, "{} {}".format(user.first_name, user.last_name)]
<<<<<<< HEAD
            for user in storage.all('User').values())
    return render_template('0-hbnb.html', 
            states=states, 
            amens=amens, 
            places=places, 
            users=users, 
            cache_id=uuid.uuid4())

if __name__ == "__main__":
    """
    Main flask app
    """
    app.run(host=host, port=port)

=======
                 for user in storage.all('User').values())
    cache_id = uuid4()
    return render_template('/0-hbnb.html',
                           states=states,
                           amens=amens,
                           places=places,
                           users=users,
                           cache_id=cache_id)

if __name__ == "__main__":
    """
    MAIN Flask App"""
    app.run(host=host, port=port)
>>>>>>> refs/remotes/origin/master
