use practice;

db.users.insert({ name: 'Adam', username: 'adam', password: 'adam123' });
db.users.updateOne({ username: 'adam' }, { $set: { roles: ['student', 'faculty'] } })

db.users.insertOne({
    name: 'ben',
    username: 'ben',
    password: 'ben123'
})
db.users.updateOne({ name: 'ben' }, { $set: { roles: ['faculty'] } });

db.users.aggregate([{ $unwind: '$roles' }])
db.users.aggregate([{ $unwind: '$roles' }, { $group: { _id: '$roles', total: { $count: {} } } }])

db.users.find();
db.users.count;

db.users.drop();