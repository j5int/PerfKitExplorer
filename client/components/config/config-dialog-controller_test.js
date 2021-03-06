/**
 * @copyright Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @fileoverview Tests for the DashboardController controller.
 * @author joemu@google.com (Joe Allan Muharsky)
 */

goog.require('p3rf.perfkit.explorer.application.module');
goog.require('p3rf.perfkit.explorer.components.config.ConfigDialogCtrl');
goog.require('p3rf.perfkit.explorer.components.config.ConfigService');

describe('ConfigDialogCtrl', function() {
  const explorer = p3rf.perfkit.explorer;
  const ConfigService = explorer.components.config.ConfigService;

  var ctrl, scope, rootScope, location, q, configService;
  var httpBackend, endpoint, mockData;

  beforeEach(module('explorer'));

  beforeEach(inject(function($rootScope, $controller) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    modalInstance = {                    // Create a mock object using spies
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };
    ctrl = $controller(
        'ConfigDialogCtrl',
        {$scope: scope,
         $modalInstance: modalInstance});
  }));

  describe('ok', function() {
    it('should update the config.', function() {
      spyOn(ctrl.configService, 'update');

      var providedProject = 'PROVIDED_PROJECT';

      ctrl.workingConfig.default_project = providedProject;
      ctrl.ok();
      expect(ctrl.configService.update).toHaveBeenCalled();
      expect(ctrl.configService.default_project).toBe(providedProject);
      expect(modalInstance.close).toHaveBeenCalled();
    });
  });

  describe('refresh', function() {
    it('should update the config.', function() {
      spyOn(ctrl.configService, 'refresh');

      ctrl.workingConfig.default_project = 'UPDATED_PROJECT';
      ctrl.refresh();
      expect(ctrl.configService.refresh).toHaveBeenCalled();
      expect(ctrl.workingConfig.default_project).toBe('');
    });
  });

  describe('cancel', function() {
    it('should dismiss the dialog.', function() {
      ctrl.cancel();
      expect(modalInstance.dismiss).toHaveBeenCalled();
    });

    it('should leave settings at their original values.', function() {
      var provided_project = 'PROVIDED_PROJECT';
      var expected_project = ctrl.configService.default_project;

      ctrl.workingConfig.default_project = provided_project;
      ctrl.cancel();

      expect(ctrl.configService.default_project).toBe(expected_project);
    });
  });
});
