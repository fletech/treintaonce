API_URL= https://docs.google.com/spreadsheets/d/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/edit?usp=sharing
API_KEY= AIzaSyDBqmpoRiOuQPeegck-X2G0OvAAYSoUFFo

work_ID -> no hace falta explicar
type_ID -> es una tabla secundaria que tiene un ID y un nombre, a traves del type_ID puedo rastrear el type_name
work_title -> Texto
work_description -> Texto
work_date -> Date
work_customer_logo -> URL
work_image_cover -> URL
work_image1 -> URL
work_image2 -> URL
work_image3 -> URL
work_image4 -> URL
work_image5 -> URL

a su vez hay una tabla que tiene las relaciones de work_ID con category_ID en la tabla llamada "works_categories" que tiene 3 columnas: relation_id // work_ID // category_ID

dame un componente llamado Items.jsx que haga un fetch a esta url : https://docs.google.com/spreadsheets/d/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/edit?usp=sharing y que los resultados me los guarde en un estado llamado data
