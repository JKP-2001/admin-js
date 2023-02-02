(function (designSystem, adminjs, React, styled) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var PasswordEdit = function PasswordEdit(props) {
    var onChange = props.onChange,
      property = props.property,
      record = props.record,
      resource = props.resource;
    var _useTranslation = adminjs.useTranslation(),
      tb = _useTranslation.translateButton;
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPassword = _useState2[0],
      togglePassword = _useState2[1];
    React.useEffect(function () {
      if (!showPassword) {
        onChange(property.name, '');
      }
    }, [onChange, showPassword]);

    // For new records always show the property
    if (!record.id) {
      return /*#__PURE__*/React__default["default"].createElement(adminjs.BasePropertyComponent.Password.Edit, props);
    }
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, showPassword && /*#__PURE__*/React__default["default"].createElement(adminjs.BasePropertyComponent.Password.Edit, props), /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Text, {
      textAlign: "center"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Button, {
      onClick: function onClick() {
        return togglePassword(!showPassword);
      },
      type: "button"
    }, showPassword ? tb('cancel', resource.id) : tb('changePassword', resource.id)))));
  };

  var Edit = function Edit(_ref) {
    var property = _ref.property,
      record = _ref.record,
      onChange = _ref.onChange;
    var params = record.params;
    var _ref2 = property,
      custom = _ref2.custom;
    var path = adminjs.flat.get(params, custom.filePathProperty);
    var key = adminjs.flat.get(params, custom.keyProperty);
    var file = adminjs.flat.get(params, custom.fileProperty);
    var _useState = React.useState(key),
      _useState2 = _slicedToArray(_useState, 2),
      originalKey = _useState2[0],
      setOriginalKey = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filesToUpload = _useState4[0],
      setFilesToUpload = _useState4[1];
    React.useEffect(function () {
      // it means means that someone hit save and new file has been uploaded
      // in this case fliesToUpload should be cleared.
      // This happens when user turns off redirect after new/edit
      if (typeof key === 'string' && key !== originalKey || typeof key !== 'string' && !originalKey || typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length) {
        setOriginalKey(key);
        setFilesToUpload([]);
      }
    }, [key, originalKey]);
    var onUpload = function onUpload(files) {
      setFilesToUpload(files);
      onChange(custom.fileProperty, files);
    };
    var handleRemove = function handleRemove() {
      onChange(custom.fileProperty, null);
    };
    var handleMultiRemove = function handleMultiRemove(singleKey) {
      var index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
      var filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
      if (path && path.length > 0) {
        var newPath = path.map(function (currentPath, i) {
          return i !== index ? currentPath : null;
        });
        var newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [].concat(_toConsumableArray(filesToDelete), [index]));
        newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
        onChange(_objectSpread2(_objectSpread2({}, record), {}, {
          params: newParams
        }));
      } else {
        // eslint-disable-next-line no-console
        console.log('You cannot remove file when there are no uploaded files yet');
      }
    };
    return /*#__PURE__*/React__default["default"].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, {
      onChange: onUpload,
      multiple: custom.multiple,
      validate: {
        mimeTypes: custom.mimeTypes,
        maxSize: custom.maxSize
      },
      files: filesToUpload
    }), !custom.multiple && key && path && !filesToUpload.length && file !== null && /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
      filename: key,
      src: path,
      onRemove: handleRemove
    }), custom.multiple && key && key.length && path ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, key.map(function (singleKey, index) {
      // when we remove items we set only path index to nulls.
      // key is still there. This is because
      // we have to maintain all the indexes. So here we simply filter out elements which
      // were removed and display only what was left
      var currentPath = path[index];
      return currentPath ? /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
        key: singleKey,
        filename: singleKey,
        src: path[index],
        onRemove: function onRemove() {
          return handleMultiRemove(singleKey);
        }
      }) : '';
    })) : '');
  };

  var AudioMimeTypes = ['audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'application/ogg', 'audio/opus', 'audio/wav', 'audio/webm', 'audio/3gpp2'];
  var ImageMimeTypes = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/vnd.microsoft.icon', 'image/tiff', 'image/webp'];

  // eslint-disable-next-line import/no-extraneous-dependencies
  var SingleFile = function SingleFile(props) {
    var name = props.name,
      path = props.path,
      mimeType = props.mimeType,
      width = props.width;
    if (path && path.length) {
      if (mimeType && ImageMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default["default"].createElement("img", {
          src: path,
          style: {
            maxHeight: width,
            maxWidth: width
          },
          alt: name
        });
      }
      if (mimeType && AudioMimeTypes.includes(mimeType)) {
        return /*#__PURE__*/React__default["default"].createElement("audio", {
          controls: true,
          src: path
        }, "Your browser does not support the", /*#__PURE__*/React__default["default"].createElement("code", null, "audio"), /*#__PURE__*/React__default["default"].createElement("track", {
          kind: "captions"
        }));
      }
    }
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Button, {
      as: "a",
      href: path,
      ml: "default",
      size: "sm",
      rounded: true,
      target: "_blank"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Icon, {
      icon: "DocumentDownload",
      color: "white",
      mr: "default"
    }), name));
  };
  var File = function File(_ref) {
    var width = _ref.width,
      record = _ref.record,
      property = _ref.property;
    var _ref2 = property,
      custom = _ref2.custom;
    var path = adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.filePathProperty);
    if (!path) {
      return null;
    }
    var name = adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
    var mimeType = custom.mimeTypeProperty && adminjs.flat.get(record === null || record === void 0 ? void 0 : record.params, custom.mimeTypeProperty);
    if (!property.custom.multiple) {
      if (custom.opts && custom.opts.baseUrl) {
        path = "".concat(custom.opts.baseUrl, "/").concat(name);
      }
      return /*#__PURE__*/React__default["default"].createElement(SingleFile, {
        path: path,
        name: name,
        width: width,
        mimeType: mimeType
      });
    }
    if (custom.opts && custom.opts.baseUrl) {
      var baseUrl = custom.opts.baseUrl || '';
      path = path.map(function (singlePath, index) {
        return "".concat(baseUrl, "/").concat(name[index]);
      });
    }
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, path.map(function (singlePath, index) {
      return /*#__PURE__*/React__default["default"].createElement(SingleFile, {
        key: singlePath,
        path: singlePath,
        name: name[index],
        width: width,
        mimeType: mimeType[index]
      });
    }));
  };

  var List = function List(props) {
    return /*#__PURE__*/React__default["default"].createElement(File, _extends({
      width: 100
    }, props));
  };

  var Show = function Show(props) {
    var property = props.property;
    return /*#__PURE__*/React__default["default"].createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(File, _extends({
      width: "100%"
    }, props)));
  };

  var _templateObject, _templateObject2, _templateObject3;
  var Card = styled__default["default"](designSystem.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  color: ", ";\n  text-decoration: none;\n  border: 1px solid transparent;\n  &:hover {\n    border: 1px solid ", ";\n    box-shadow: ", ";\n  }\n"])), function (_ref2) {
    var flex = _ref2.flex;
    return flex ? "flex" : "block";
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.grey100;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.primary100;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.shadows.cardHover;
  });
  Card.defaultProps = {
    variant: "white",
    boxShadow: "card"
  };
  var Title = styled__default["default"].h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 5em;\n  line-height: 1.3em;\n  text-align: center;\n  color: #2a4777;\n  font-weight: 700;\n"])));
  var MyDiv = styled__default["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-40%, -50%);\n  width: 70%;\n"])));
  var MyDashboard = function MyDashboard() {
    return /*#__PURE__*/React__default["default"].createElement(MyDiv, null, /*#__PURE__*/React__default["default"].createElement(Title, null, "Welcome to Students' Web Committee's OneStop Dashboard !"));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Component0 = PasswordEdit;
  AdminJS.UserComponents.Component1 = Edit;
  AdminJS.UserComponents.Component2 = List;
  AdminJS.UserComponents.Component3 = Show;
  AdminJS.UserComponents.Component4 = Edit;
  AdminJS.UserComponents.Component5 = List;
  AdminJS.UserComponents.Component6 = Show;
  AdminJS.UserComponents.Component7 = Edit;
  AdminJS.UserComponents.Component8 = List;
  AdminJS.UserComponents.Component9 = Show;
  AdminJS.UserComponents.Component10 = Edit;
  AdminJS.UserComponents.Component11 = List;
  AdminJS.UserComponents.Component12 = Show;
  AdminJS.UserComponents.MyDashboard = MyDashboard;

})(AdminJSDesignSystem, AdminJS, React, styled);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2NvbXBvbmVudHMvZWRpdC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvdHlwZXMvbWltZS10eXBlcy50eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9maWxlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvc3JjL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvbGlzdC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cudHN4IiwiLi4vQ29tcG9uZW50cy9EYXNoYm9hcmQvTXlEYXNoQm9hcmQuanN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCwgRWRpdFByb3BlcnR5UHJvcHMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhc3N3b3JkRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5LCByZWNvcmQsIHJlc291cmNlIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbjogdGIgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCB0b2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2hvd1Bhc3N3b3JkKSB7XG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCAnJylcbiAgICB9XG4gIH0sIFtvbkNoYW5nZSwgc2hvd1Bhc3N3b3JkXSlcblxuICAvLyBGb3IgbmV3IHJlY29yZHMgYWx3YXlzIHNob3cgdGhlIHByb3BlcnR5XG4gIGlmICghcmVjb3JkLmlkKSB7XG4gICAgcmV0dXJuIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICB7c2hvd1Bhc3N3b3JkICYmIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9IC8+fVxuICAgICAgPEJveCBtYj1cInhsXCI+XG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlUGFzc3dvcmQoIXNob3dQYXNzd29yZCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyB0YignY2FuY2VsJywgcmVzb3VyY2UuaWQpIDogdGIoJ2NoYW5nZVBhc3N3b3JkJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEVkaXRcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIGZsYXQgfSBmcm9tICdhZG1pbmpzJ1xuaW1wb3J0IHsgRHJvcFpvbmUsIEZvcm1Hcm91cCwgTGFiZWwsIERyb3Bab25lSXRlbSB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgUHJvcGVydHlDdXN0b20gZnJvbSAnLi4vdHlwZXMvcHJvcGVydHktY3VzdG9tLnR5cGUnXG5cbmNvbnN0IEVkaXQ6IEZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9ICh7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZFxuICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHkgYXMgdW5rbm93biBhcyB7IGN1c3RvbTogUHJvcGVydHlDdXN0b20gfVxuXG4gIGNvbnN0IHBhdGggPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5KVxuICBjb25zdCBrZXkgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSlcbiAgY29uc3QgZmlsZSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQcm9wZXJ0eSlcblxuICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSlcbiAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGU8QXJyYXk8RmlsZT4+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgIC8vIGluIHRoaXMgY2FzZSBmbGllc1RvVXBsb2FkIHNob3VsZCBiZSBjbGVhcmVkLlxuICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSAhPT0gb3JpZ2luYWxLZXkpXG4gICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgIW9yaWdpbmFsS2V5KVxuICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmIEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoICE9PSBvcmlnaW5hbEtleS5sZW5ndGgpXG4gICAgKSB7XG4gICAgICBzZXRPcmlnaW5hbEtleShrZXkpXG4gICAgICBzZXRGaWxlc1RvVXBsb2FkKFtdKVxuICAgIH1cbiAgfSwgW2tleSwgb3JpZ2luYWxLZXldKVxuXG4gIGNvbnN0IG9uVXBsb2FkID0gKGZpbGVzOiBBcnJheTxGaWxlPik6IHZvaWQgPT4ge1xuICAgIHNldEZpbGVzVG9VcGxvYWQoZmlsZXMpXG4gICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XG4gICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgbnVsbClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gKGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIGN1c3RvbS5rZXlQcm9wZXJ0eSkgfHwgW10pLmluZGV4T2Yoc2luZ2xlS2V5KVxuICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXVxuICAgIGlmIChcbiAgICAgIHBhdGggJiYgcGF0aC5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKVxuICAgICAgbGV0IG5ld1BhcmFtcyA9IGZsYXQuc2V0KFxuICAgICAgICByZWNvcmQucGFyYW1zLFxuICAgICAgICBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LFxuICAgICAgICBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdLFxuICAgICAgKVxuICAgICAgbmV3UGFyYW1zID0gZmxhdC5zZXQobmV3UGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSwgbmV3UGF0aClcblxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwPlxuICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgPERyb3Bab25lXG4gICAgICAgIG9uQ2hhbmdlPXtvblVwbG9hZH1cbiAgICAgICAgbXVsdGlwbGU9e2N1c3RvbS5tdWx0aXBsZX1cbiAgICAgICAgdmFsaWRhdGU9e3tcbiAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMgYXMgQXJyYXk8c3RyaW5nPixcbiAgICAgICAgICBtYXhTaXplOiBjdXN0b20ubWF4U2l6ZSxcbiAgICAgICAgfX1cbiAgICAgICAgZmlsZXM9e2ZpbGVzVG9VcGxvYWR9XG4gICAgICAvPlxuICAgICAgeyFjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIHBhdGggJiYgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmIGZpbGUgIT09IG51bGwgJiYgKFxuICAgICAgICA8RHJvcFpvbmVJdGVtIGZpbGVuYW1lPXtrZXl9IHNyYz17cGF0aH0gb25SZW1vdmU9e2hhbmRsZVJlbW92ZX0gLz5cbiAgICAgICl9XG4gICAgICB7Y3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2tleS5tYXAoKHNpbmdsZUtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgcmVtb3ZlIGl0ZW1zIHdlIHNldCBvbmx5IHBhdGggaW5kZXggdG8gbnVsbHMuXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBtYWludGFpbiBhbGwgdGhlIGluZGV4ZXMuIFNvIGhlcmUgd2Ugc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZCBhbmQgZGlzcGxheSBvbmx5IHdoYXQgd2FzIGxlZnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChcbiAgICAgICAgICAgICAgPERyb3Bab25lSXRlbVxuICAgICAgICAgICAgICAgIGtleT17c2luZ2xlS2V5fVxuICAgICAgICAgICAgICAgIGZpbGVuYW1lPXtzaW5nbGVLZXl9XG4gICAgICAgICAgICAgICAgc3JjPXtwYXRoW2luZGV4XX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gaGFuZGxlTXVsdGlSZW1vdmUoc2luZ2xlS2V5KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAnJ31cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICdhdWRpby9hYWMnLFxuICAnYXVkaW8vbWlkaScsXG4gICdhdWRpby94LW1pZGknLFxuICAnYXVkaW8vbXBlZycsXG4gICdhdWRpby9vZ2cnLFxuICAnYXBwbGljYXRpb24vb2dnJyxcbiAgJ2F1ZGlvL29wdXMnLFxuICAnYXVkaW8vd2F2JyxcbiAgJ2F1ZGlvL3dlYm0nLFxuICAnYXVkaW8vM2dwcDInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgVmlkZW9NaW1lVHlwZXMgPSBbXG4gICd2aWRlby94LW1zdmlkZW8nLFxuICAndmlkZW8vbXBlZycsXG4gICd2aWRlby9vZ2cnLFxuICAndmlkZW8vbXAydCcsXG4gICd2aWRlby93ZWJtJyxcbiAgJ3ZpZGVvLzNncHAnLFxuICAndmlkZW8vM2dwcDInLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICdpbWFnZS9ibXAnLFxuICAnaW1hZ2UvZ2lmJyxcbiAgJ2ltYWdlL2pwZWcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgJ2ltYWdlL3RpZmYnLFxuICAnaW1hZ2Uvd2VicCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24veC1iemlwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnLFxuICAnYXBwbGljYXRpb24veC10YXInLFxuICAnYXBwbGljYXRpb24vemlwJyxcbiAgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnLFxuICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG4gICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG4gICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnLFxuICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXSBhcyBjb25zdFxuXG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgJ3RleHQvY3NzJyxcbiAgJ3RleHQvY3N2JyxcbiAgJ3RleHQvaHRtbCcsXG4gICd0ZXh0L2NhbGVuZGFyJyxcbiAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgJ2FwcGxpY2F0aW9uL2xkK2pzb24nLFxuICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgJ3RleHQvcGxhaW4nLFxuICAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcbiAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICd0ZXh0L3htbCcsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBCaW5hcnlEb2NzTWltZVR5cGVzID0gW1xuICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAnYXBwbGljYXRpb24vcGRmJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IEZvbnRNaW1lVHlwZXMgPSBbXG4gICdmb250L290ZicsXG4gICdmb250L3R0ZicsXG4gICdmb250L3dvZmYnLFxuICAnZm9udC93b2ZmMicsXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCcsXG4gICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgJ3ZuZC52aXNpbycsXG4gICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl0gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgLi4uQXVkaW9NaW1lVHlwZXMsXG4gIC4uLlZpZGVvTWltZVR5cGVzLFxuICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgLi4uQ29tcHJlc3NlZE1pbWVUeXBlcyxcbiAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gIC4uLlRleHRNaW1lVHlwZXMsXG4gIC4uLkJpbmFyeURvY3NNaW1lVHlwZXMsXG4gIC4uLk90aGVyTWltZVR5cGVzLFxuICAuLi5Gb250TWltZVR5cGVzLFxuICAuLi5PdGhlck1pbWVUeXBlcyxcbl1cblxudHlwZSBQb3B1bGFyTWltZVR5cGVzID0gdHlwZW9mIE1pbWVUeXBlc1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIE1pbWVUeXBlID0gUG9wdWxhck1pbWVUeXBlcyB8IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBmbGF0LCBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF1ZGlvTWltZVR5cGVzLCBJbWFnZU1pbWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzL21pbWUtdHlwZXMudHlwZSdcbmltcG9ydCBQcm9wZXJ0eUN1c3RvbSBmcm9tICcuLi90eXBlcy9wcm9wZXJ0eS1jdXN0b20udHlwZSdcblxudHlwZSBQcm9wcyA9IFNob3dQcm9wZXJ0eVByb3BzICYge1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbn07XG5cbnR5cGUgU2luZ2xlRmlsZVByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIG1pbWVUeXBlPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbn07XG5cbmNvbnN0IFNpbmdsZUZpbGU6IEZDPFNpbmdsZUZpbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBwYXRoLCBtaW1lVHlwZSwgd2lkdGggfSA9IHByb3BzXG5cbiAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUgYXMgYW55KSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17cGF0aH1cbiAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfX1cbiAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSBhcyBhbnkpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YXVkaW8gY29udHJvbHMgc3JjPXtwYXRofT5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGVcbiAgICAgICAgICA8Y29kZT5hdWRpbzwvY29kZT5cbiAgICAgICAgICA8dHJhY2sga2luZD1cImNhcHRpb25zXCIgLz5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEJ1dHRvbiBhcz1cImFcIiBocmVmPXtwYXRofSBtbD1cImRlZmF1bHRcIiBzaXplPVwic21cIiByb3VuZGVkIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8SWNvbiBpY29uPVwiRG9jdW1lbnREb3dubG9hZFwiIGNvbG9yPVwid2hpdGVcIiBtcj1cImRlZmF1bHRcIiAvPlxuICAgICAgICB7bmFtZX1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IEZpbGU6IEZDPFByb3BzPiA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgY29uc3QgeyBjdXN0b20gfSA9IHByb3BlcnR5IGFzIHVua25vd24gYXMgeyBjdXN0b206IFByb3BlcnR5Q3VzdG9tIH1cblxuICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSlcblxuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KFxuICAgIHJlY29yZD8ucGFyYW1zLFxuICAgIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHksXG4gIClcblxuICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KVxuXG4gIGlmICghcHJvcGVydHkuY3VzdG9tLm11bHRpcGxlKSB7XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFNpbmdsZUZpbGUgcGF0aD17cGF0aH0gbmFtZT17bmFtZX0gd2lkdGg9e3dpZHRofSBtaW1lVHlwZT17bWltZVR5cGV9IC8+XG4gICAgKVxuICB9XG4gIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJydcbiAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaW5nbGVGaWxlXG4gICAgICAgICAga2V5PXtzaW5nbGVQYXRofVxuICAgICAgICAgIHBhdGg9e3NpbmdsZVBhdGh9XG4gICAgICAgICAgbmFtZT17bmFtZVtpbmRleF19XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZVtpbmRleF19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcydcblxuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlJ1xuXG5jb25zdCBMaXN0OiBGQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+ICg8RmlsZSB3aWR0aD17MTAwfSB7Li4ucHJvcHN9IC8+KVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcydcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUnXG5cbmNvbnN0IFNob3c6IEZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cD5cbiAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgIDxGaWxlIHdpZHRoPVwiMTAwJVwiIHsuLi5wcm9wc30gLz5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEgyLFxyXG4gIEg1LFxyXG4gIEg0LFxyXG4gIFRleHQsXHJcbiAgSWxsdXN0cmF0aW9uLFxyXG4gIC8vIElsbHVzdHJhdGlvblByb3BzLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwiYWRtaW5qc1wiO1xyXG5cclxuY29uc3QgcGFnZUhlYWRlckhlaWdodCA9IDI4NDtcclxuY29uc3QgcGFnZUhlYWRlclBhZGRpbmdZID0gNzQ7XHJcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWCA9IDI1MDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBvdmVyZmxvdz1cImhpZGRlblwiIGRhdGEtY3NzPVwiZGVmYXVsdC1kYXNoYm9hcmRcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgIHRvcD17NTB9XHJcbiAgICAgICAgbGVmdD17LTEwfVxyXG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XHJcbiAgICAgICAgYW5pbWF0ZVxyXG4gICAgICA+XHJcbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiUm9ja2V0XCIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICB0b3A9ey03MH1cclxuICAgICAgICByaWdodD17LTE1fVxyXG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XHJcbiAgICAgICAgYW5pbWF0ZVxyXG4gICAgICA+XHJcbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiTW9vblwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYmc9XCJncmV5MTAwXCJcclxuICAgICAgICBoZWlnaHQ9e3BhZ2VIZWFkZXJIZWlnaHR9XHJcbiAgICAgICAgcHk9e3BhZ2VIZWFkZXJQYWRkaW5nWX1cclxuICAgICAgICBweD17W1wiZGVmYXVsdFwiLCBcImxnXCIsIHBhZ2VIZWFkZXJQYWRkaW5nWF19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgICA8SDI+e3RyYW5zbGF0ZU1lc3NhZ2UoXCJ3ZWxjb21lT25Cb2FyZF90aXRsZVwiKX08L0gyPlxyXG4gICAgICAgICAgPFRleHQgb3BhY2l0eT17MC44fT5cclxuICAgICAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoXCJ3ZWxjb21lT25Cb2FyZF9zdWJ0aXRsZVwiKX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGJveGVzID0gKHsgdHJhbnNsYXRlTWVzc2FnZSB9KSA9PiBbXHJcbiAge1xyXG4gICAgdmFyaWFudDogXCJQbGFuZXRcIixcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKFwiYWRkaW5nUmVzb3VyY2VzX3RpdGxlXCIpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJhZGRpbmdSZXNvdXJjZXNfc3VidGl0bGVcIiksXHJcbiAgICBocmVmOiBcImh0dHBzOi8vYWRtaW5qcy5jby90dXRvcmlhbC1wYXNzaW5nLXJlc291cmNlcy5odG1sXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiBcIkRvY3VtZW50Q2hlY2tcIixcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKFwiY3VzdG9taXplUmVzb3VyY2VzX3RpdGxlXCIpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJjdXN0b21pemVSZXNvdXJjZXNfc3VidGl0bGVcIiksXHJcbiAgICBocmVmOiBcImh0dHBzOi8vYWRtaW5qcy5jby90dXRvcmlhbC1jdXN0b21pemluZy1yZXNvdXJjZXMuaHRtbFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFyaWFudDogXCJEb2N1bWVudFNlYXJjaFwiLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJjdXN0b21pemVBY3Rpb25zX3RpdGxlXCIpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJjdXN0b21pemVBY3Rpb25zX3N1YnRpdGxlXCIpLFxyXG4gICAgaHJlZjogXCJodHRwczovL2FkbWluanMuY28vdHV0b3JpYWwtYWN0aW9ucy5odG1sXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiBcIkZsYWdJbkNvZ1wiLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJ3cml0ZU93bkNvbXBvbmVudHNfdGl0bGVcIiksXHJcbiAgICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZShcIndyaXRlT3duQ29tcG9uZW50c19zdWJ0aXRsZVwiKSxcclxuICAgIGhyZWY6IFwiaHR0cHM6Ly9hZG1pbmpzLmNvL3R1dG9yaWFsLXdyaXRpbmctcmVhY3QtY29tcG9uZW50cy5odG1sXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiBcIkZvbGRlcnNcIixcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKFwiY3VzdG9tRGFzaGJvYXJkX3RpdGxlXCIpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoXCJjdXN0b21EYXNoYm9hcmRfc3VidGl0bGVcIiksXHJcbiAgICBocmVmOiBcImh0dHBzOi8vYWRtaW5qcy5jby90dXRvcmlhbC1jdXN0b20tZGFzaGJvYXJkLmh0bWxcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHZhcmlhbnQ6IFwiQXN0cm9uYXV0XCIsXHJcbiAgICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZShcInJvbGVCYXNlZEFjY2Vzc190aXRsZVwiKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKFwicm9sZUJhc2VkQWNjZXNzX3N1YnRpdGxlXCIpLFxyXG4gICAgaHJlZjogXCJodHRwczovL2FkbWluanMuY28vdHV0b3JpYWwtcmJhYy5odG1sXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcclxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSkgPT4gKGZsZXggPyBcImZsZXhcIiA6IFwiYmxvY2tcIil9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmV5MTAwfTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5MTAwfTtcclxuICAgIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2hhZG93cy5jYXJkSG92ZXJ9O1xyXG4gIH1cclxuYDtcclxuXHJcbkNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6IFwid2hpdGVcIixcclxuICBib3hTaGFkb3c6IFwiY2FyZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPERhc2hib2FyZEhlYWRlciAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgbXQ9e1tcInhsXCIsIFwieGxcIiwgXCItMTAwcHhcIl19XHJcbiAgICAgICAgbWI9XCJ4bFwiXHJcbiAgICAgICAgbXg9e1swLCAwLCAwLCBcImF1dG9cIl19XHJcbiAgICAgICAgcHg9e1tcImRlZmF1bHRcIiwgXCJsZ1wiLCBcInh4bFwiLCBcIjBcIl19XHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXHJcbiAgICAgICAgd2lkdGg9e1sxLCAxLCAxLCAxMDI0XX1cclxuICAgICAgPlxyXG4gICAgICAgIHtib3hlcyh7IHRyYW5zbGF0ZU1lc3NhZ2UgfSkubWFwKChib3gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAyLCAxIC8gM119IHA9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBhcz1cImFcIiBocmVmPXtib3guaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9e2JveC52YXJpYW50fSB3aWR0aD17MTAwfSBoZWlnaHQ9ezcwfSAvPlxyXG4gICAgICAgICAgICAgICAgPEg1IG10PVwibGdcIj57Ym94LnRpdGxlfTwvSDU+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Ym94LnN1YnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAxIC8gMl19IHA9XCJsZ1wiPlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgZmxleFxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hZG1pbmpzLnBhZ2UubGluay9zbGFja1wiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+XHJcbiAgICAgICAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiU2xhY2tMb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggbWw9XCJ4bFwiPlxyXG4gICAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZShcImNvbW11bml0eV90aXRsZVwiKX08L0g0PlxyXG4gICAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKFwiY29tbXVuaXR5X3N1YnRpdGxlXCIpfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gcD1cImxnXCI+XHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICBmbGV4XHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU29mdHdhcmVCcm90aGVycy9hZG1pbmpzL2lzc3Vlc1wiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+XHJcbiAgICAgICAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiR2l0aHViTG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IG1sPVwieGxcIj5cclxuICAgICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoXCJmb3VuZEJ1Z190aXRsZVwiKX08L0g0PlxyXG4gICAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKFwiZm91bmRCdWdfc3VidGl0bGVcIil9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiIGJveFNoYWRvdz1cImNhcmRcIiB3aWR0aD17MX0gbT1cImxnXCI+XHJcbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiQWRtaW5KU0xvZ29cIiAvPlxyXG4gICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoXCJuZWVkTW9yZVNvbHV0aW9uc190aXRsZVwiKX08L0g0PlxyXG4gICAgICAgICAgICA8VGV4dD57dHJhbnNsYXRlTWVzc2FnZShcIm5lZWRNb3JlU29sdXRpb25zX3N1YnRpdGxlXCIpfTwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgbXQ9XCJ4eGxcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2hhcmUuaHNmb3Jtcy5jb20vMUllZHZtRXo2Ukgyb3JoY0w2ZzJVSEE4b2M1YVwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oXCJjb250YWN0VXNcIil9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzJhNDc3NztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5jb25zdCBNeURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNTAlKTtcclxuICB3aWR0aDogNzAlO1xyXG5gO1xyXG5cclxuY29uc3QgTXlEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNeURpdj5cclxuICAgICAgPFRpdGxlPldlbGNvbWUgdG8gU3R1ZGVudHMnIFdlYiBDb21taXR0ZWUncyBPbmVTdG9wIERhc2hib2FyZCAhPC9UaXRsZT5cclxuICAgIDwvTXlEaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXlEYXNoYm9hcmQ7XHJcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IENvbXBvbmVudDAgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3Bhc3N3b3Jkcy9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDAgPSBDb21wb25lbnQwXG5pbXBvcnQgQ29tcG9uZW50MSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDEgPSBDb21wb25lbnQxXG5pbXBvcnQgQ29tcG9uZW50MiBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDIgPSBDb21wb25lbnQyXG5pbXBvcnQgQ29tcG9uZW50MyBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDMgPSBDb21wb25lbnQzXG5pbXBvcnQgQ29tcG9uZW50NCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDQgPSBDb21wb25lbnQ0XG5pbXBvcnQgQ29tcG9uZW50NSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDUgPSBDb21wb25lbnQ1XG5pbXBvcnQgQ29tcG9uZW50NiBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDYgPSBDb21wb25lbnQ2XG5pbXBvcnQgQ29tcG9uZW50NyBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2VkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDcgPSBDb21wb25lbnQ3XG5pbXBvcnQgQ29tcG9uZW50OCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL2xpc3QnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDggPSBDb21wb25lbnQ4XG5pbXBvcnQgQ29tcG9uZW50OSBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL3NyYy9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL3Nob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvbXBvbmVudDkgPSBDb21wb25lbnQ5XG5pbXBvcnQgQ29tcG9uZW50MTAgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxMCA9IENvbXBvbmVudDEwXG5pbXBvcnQgQ29tcG9uZW50MTEgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9saXN0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxMSA9IENvbXBvbmVudDExXG5pbXBvcnQgQ29tcG9uZW50MTIgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9zcmMvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9zaG93J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db21wb25lbnQxMiA9IENvbXBvbmVudDEyXG5pbXBvcnQgTXlEYXNoYm9hcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9EYXNoYm9hcmQvTXlEYXNoQm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLk15RGFzaGJvYXJkID0gTXlEYXNoYm9hcmQiXSwibmFtZXMiOlsiUGFzc3dvcmRFZGl0IiwicHJvcHMiLCJvbkNoYW5nZSIsInByb3BlcnR5IiwicmVjb3JkIiwicmVzb3VyY2UiLCJ1c2VUcmFuc2xhdGlvbiIsInRiIiwidHJhbnNsYXRlQnV0dG9uIiwidXNlU3RhdGUiLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsInVzZUVmZmVjdCIsIm5hbWUiLCJpZCIsIlJlYWN0IiwiQmFzZVByb3BlcnR5Q29tcG9uZW50IiwiQm94IiwiVGV4dCIsIkJ1dHRvbiIsIkVkaXQiLCJwYXJhbXMiLCJjdXN0b20iLCJwYXRoIiwiZmxhdCIsImdldCIsImZpbGVQYXRoUHJvcGVydHkiLCJrZXkiLCJrZXlQcm9wZXJ0eSIsImZpbGUiLCJmaWxlUHJvcGVydHkiLCJvcmlnaW5hbEtleSIsInNldE9yaWdpbmFsS2V5IiwiZmlsZXNUb1VwbG9hZCIsInNldEZpbGVzVG9VcGxvYWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvblVwbG9hZCIsImZpbGVzIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlTXVsdGlSZW1vdmUiLCJzaW5nbGVLZXkiLCJpbmRleCIsImluZGV4T2YiLCJmaWxlc1RvRGVsZXRlIiwiZmlsZXNUb0RlbGV0ZVByb3BlcnR5IiwibmV3UGF0aCIsIm1hcCIsImN1cnJlbnRQYXRoIiwiaSIsIm5ld1BhcmFtcyIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJGb3JtR3JvdXAiLCJMYWJlbCIsImxhYmVsIiwiRHJvcFpvbmUiLCJtdWx0aXBsZSIsIm1pbWVUeXBlcyIsIm1heFNpemUiLCJEcm9wWm9uZUl0ZW0iLCJBdWRpb01pbWVUeXBlcyIsIkltYWdlTWltZVR5cGVzIiwiU2luZ2xlRmlsZSIsIm1pbWVUeXBlIiwid2lkdGgiLCJpbmNsdWRlcyIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwiSWNvbiIsIkZpbGUiLCJmaWxlTmFtZVByb3BlcnR5IiwibWltZVR5cGVQcm9wZXJ0eSIsIm9wdHMiLCJiYXNlVXJsIiwic2luZ2xlUGF0aCIsIkxpc3QiLCJTaG93IiwiQ2FyZCIsInN0eWxlZCIsImZsZXgiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXkxMDAiLCJwcmltYXJ5MTAwIiwic2hhZG93cyIsImNhcmRIb3ZlciIsImRlZmF1bHRQcm9wcyIsInZhcmlhbnQiLCJib3hTaGFkb3ciLCJUaXRsZSIsImgxIiwiTXlEaXYiLCJkaXYiLCJNeURhc2hib2FyZCIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkNvbXBvbmVudDAiLCJDb21wb25lbnQxIiwiQ29tcG9uZW50MiIsIkNvbXBvbmVudDMiLCJDb21wb25lbnQ0IiwiQ29tcG9uZW50NSIsIkNvbXBvbmVudDYiLCJDb21wb25lbnQ3IiwiQ29tcG9uZW50OCIsIkNvbXBvbmVudDkiLCJDb21wb25lbnQxMCIsIkNvbXBvbmVudDExIiwiQ29tcG9uZW50MTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
