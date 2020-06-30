{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [],
   "source": [
    "import os \n",
    "import pandas as pd\n",
    "import numpy as np\n",
    "import sqlalchemy \n",
    "from sqlalchemy.ext.automap import automap_base\n",
    "from sqlalchemy.orm import session\n",
    "from sqlalchemy import create_engine\n",
    "from flask import Flask\n",
    "from flask import jsonify\n",
    "from flask import render_template\n",
    "from flask_sqlakchemy iport SQLAlchemy\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "app = Flask(__name__)\n",
    "app.config[\"SqlAlchemy_Data_Url\"] = \"sqlite://db/bellybutton.sqlite\""
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "PythonData",
   "language": "python",
   "name": "pythondata"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.6"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
