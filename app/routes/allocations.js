const AllocationsDAO = require("../data/allocations-dao").AllocationsDAO;
const {
    environmentalScripts
} = require("../../config/config");

function AllocationsHandler(db) {
    "use strict";

    const allocationsDAO = new AllocationsDAO(db);

    this.displayAllocations = (req, res, next) => {
        const { userId } = req.params;
        const { threshold } = req.query;

        // ✅ Check: current user is only allowed to access their own allocations
        if (parseInt(userId) !== req.session.userId) {
            return res.status(403).send("Forbidden: unauthorized access to user data");
        }

        allocationsDAO.getByUserIdAndThreshold(userId, threshold, (err, allocations) => {
            if (err) return next(err);
            return res.render("allocations", {
                userId,
                allocations,
                environmentalScripts
            });
        });
    };
}

module.exports = AllocationsHandler;
