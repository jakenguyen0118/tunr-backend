const { Router } = require('express');
const router = Router();
const Song = require('../models/song');
const mongoose = require('mongoose');


// SEED ROUTE
router.get('/seed', (req, res) => {
	const seedSong = [
		{ title: 'Dreams', artist: 'Fleetwood Mac', time: '4:00' },
	];
	Song.create(seedSong, (err, data) => {
		res.json(data);
	});
});

// INDEX - show all songs in playlist
router.get('/', async (req, res) => {
    const allSongs = await Song.find({})
    res.json({ status: 200, data: allSongs})
})
// checked on http://localhost:4000/

// POST - create a song
router.post('/', async (req, res) => {
    const song = await Song.create(req.body)
    res.json({ status: 200, data: song})
})


// PUT - update a song
router.put('/:id', async (req, res) => {
	console.log('put request to update:', req.params.title);
	const song = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true,});
	res.json({
		status: 200,
		msg: 'song has been updated',
		data: song,
	});
});

// DELETE - delete a song
router.delete('/:id', async (req, res) => {
    res.json(await Song.findByIdAndDelete(req.params.id))
})

module.exports = router
