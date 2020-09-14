const jwt = require('jsonwebtoken');
const _ = require('lodash');
const moment = require('moment');
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function createOrUpdate(Model, whereCondition, restData, transaction = null) {
  // First try to find the record
  let foundItem = null;
  if (whereCondition) {
    foundItem = await Model.findOne({ where: whereCondition, transaction });
  }
  if (!foundItem) {
    // Item not found, create a new one
    const record = await Model.create({ ...whereCondition, ...restData }, { transaction });
    return { record, created: true };
  }
  // Found an item, update it
  const record = await Model.update({ ...whereCondition, ...restData }, { where: whereCondition, transaction });
  return { record, created: false };
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) {
    return '';
  }
  if (moment.isMoment(date)) {
    return date.format(format);
  }
  return moment(date).format(format);
};

module.exports = {
  //   generateFrontendToken: function (data) {
  //     const expiresIn = 60 * 60 * 4; // 4 hours
  //     const token = jwt.sign(data, config.jwtFrontendSecret, { expiresIn });
  //     return token;
  //   },

  jwtData: function (res, user) {
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      avatar: user.avatar,
    };
    const expiresIn = 60 * 60 * 24; // 1 day
    const token = jwt.sign(data, config.jwtDashboardSecret, { expiresIn });
    res.cookie('id_token', token, { maxAge: expiresIn * 1000, httpOnly: true });
    return { data, token };
  },
  asyncForEach,
  sortableLiteral: (arr) => {
    if (_.isEmpty(arr)) {
      return null;
    }
    return _.sortBy(arr).join(',');
  },
  createOrUpdate,
  validateEmail,
  formatDate,
  isInDateRange: (date_range) => {
    if (!Array.isArray(date_range) || date_range.length !== 2) {
      return false;
    }
    if (moment(date_range[0]).isBefore(moment()) && moment(date_range[1]).isAfter(moment())) {
      return true;
    } else {
      return false;
    }
  },
  isDateOverdue: (date_range) => {
    if (!Array.isArray(date_range) || date_range.length !== 2) {
      return false;
    }
    if (moment(date_range[0]).isBefore(moment()) && moment(date_range[1]).isBefore(moment())) {
      return true;
    } else {
      return false;
    }
  },

  formatDateRange: (date_range, format = 'YYYY-MM-DD HH:mm', separator = ' 至 ') => {
    if (!Array.isArray(date_range) || date_range.length !== 2) {
      return undefined;
    }
    return formatDate(date_range[0], format) + separator + formatDate(date_range[1], format);
  },
};
